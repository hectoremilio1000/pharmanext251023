const aws = require('aws-sdk');
const cognitoidentityserviceprovider = new aws.CognitoIdentityServiceProvider({ apiVersion: '2016-04-18' });
const dynamodb = new aws.DynamoDB({ region: 'us-east-1' });

const addToGroup = async ({ GroupName, UserPoolId, Username }) => {
  const groupParams = {
    GroupName,
    UserPoolId,
  };

  const addUserParams = {
    GroupName,
    UserPoolId,
    Username,
  };

  try {
    await cognitoidentityserviceprovider.getGroup(groupParams).promise();
    console.log(`[ADD-TO-GROUP] Found the group ${GroupName}`);
  } catch (e) {
    console.log(`[ADD-TO-GROUP] Creating the group ${GroupName}`);
    await cognitoidentityserviceprovider.createGroup(groupParams).promise();
    console.log(`[ADD-TO-GROUP] Created the group ${GroupName}`);
  }

  await cognitoidentityserviceprovider.adminAddUserToGroup(addUserParams).promise();
  console.log(`[ADD-TO-GROUP] Added ${Username} to the group ${GroupName}`);
}

exports.handler = async event => {

  const tableName = "CLIENTES-zt6q2d73hvdo7k5766u4qkzxge-staging";
  const currentISODate = new Date().toISOString();

  try {
    await dynamodb.putItem({
      TableName: tableName,
      Item: {
        id: { S: event.userName },
        farmaciaID: { S: 'e89d3ab0-a997-4296-9cb6-b53e2d111c75' },
        createdAt: {
          S: currentISODate
        },
        updatedAt: { S: currentISODate }
      }
    }).promise();
    console.log(`[DYNAMODB] Inserted client ${event.userName}`)
  } catch (error) {
    console.error(`[DYNAMODB] Failed to insert client ${event.userName}`, error);
  }


  let groupName = 'CLIENTES'; // Nombre del grupo en Cognito

  await addToGroup({
    GroupName: groupName,
    UserPoolId: event.userPoolId,
    Username: event.userName
  });
  return event;
};

