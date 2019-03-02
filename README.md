# DRY

This project was developed during the DV Imagines: Hacking Homelessness hackathon to reduce the administrative burden on Depaul progression coaches.

Demo: https://drydepaulcom

The web application scans notes entered by progression coaches and produces summaries of the main people, dates and places related to a young person using AWS Comprehend entity detection. 

## Developer instructions

1. Set up your [AWS credentials](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html)

2. Update the `profile` field in the [serverless.yml](serverless.yml) file to match your AWS profile

3. Configure the `AcmCertificateArn` field in the [serverless site resource file](resources/site.yml) with your certificate ARN or remove it until you have one ready

4. Run `npm run create-backend` to set up the Cognito identity pool, DynamoDB tables, IAM roles, Cloudfront distribution and S3 bucket to support the web-app - this may take a while the first time

5. Run the app using `npm run start` and navigate to [http://localhost:4200](http://localhost:4200)
