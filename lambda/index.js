import { DynamoDB } from 'aws-sdk'; // Correct import syntax for ES Modules
const dynamoDb = new DynamoDB.DocumentClient();

export const handler = async (event) => {
    const body = JSON.parse(event.body);

    const params = {
        TableName: 'Patients',
        Item: {
            id: body.id,
            name: body.name,
            status: body.status
        }
    };

    try {
        await dynamoDb.put(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Patient data added successfully' })
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error adding patient data' })
        };
    }
};
