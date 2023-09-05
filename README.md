# Deploying a docker container on AWS EC2 instance
In this project we deploy a docker container of a simple Node JS app (BMI Calculator) on AWS EC2 insatnce.

***Hint:*** BMI is a measure of body fat based on height and weight.

## What we really focus on in this app are:
 - Building a docker image of the APP.
 - Deploying the Docker container on AWS EC2 instance.

## What I used in this project:
  - NodeJS for the app.
  - AWS IAM service.
  - AWS ECR service.
  - AWS EC2 service.

Let's start:

### Clone the project and test it locally:

 1. Clone the project into your local machine:
```
https://github.com/Kareem-Ataam/BMI-nodejs-app.git
```
 2. Install all the dependencies:
```
npm install
```
 3. Run the application:
```
npm run start
```
 4. Access the application through the browser:
```
http://localhost:4000/
```

After you tested the application and every thing is working perfectly:

### Build the Docker Image and run a contianer from it:
 5. Build the docker image from the Dockerfile:
```
docker build -t bmi .
```
 6. Create and start a container from the image:
```
 docker run -d -p 4000:4000 --name bmi_container bmi
```
 7. Access the app as we did before from the browser:
```
http://localhost:4000/
```
### Create a registry to push the docker image into(we will use AWS ECR service for doing so)
 8. Create the Registry and push the image to it - [AWS ECR docs.](https://docs.aws.amazon.com/AmazonECR/latest/public/public-getting-started.html)
### Set up an EC2 instance with ubuntu Linux distro:
 9. Create an IAM user - [AWS IAM docs.](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html)

 10. Create an EC2 instance and connect to it with SSH- [AWS EC2 docs.](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html#ec2-launch-instance)
 
 11. Install docker on the EC2 instance:
 ```
 sudo apt update
 sudo apt install docker.io
 ```
 Refer to the docs if you face any problems with installation - [Installation docs](https://docs.docker.com/engine/install/ubuntu/)
 
 12. Install AWS CLI and configure it - [Install AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html#cliv2-linux-install)

 ***Hint***: You will need to authenticate the EC2 to the registry containing the image if it was a private registry by attaching a role to the EC2 instance with the policy *AmazonEC2ContainerRegistryFullAccess* and issuing the same command you used to authenticate the SSH client when you were pushing the image the registry.
 
 ### Pull the image from the registry we created using AWS ECR to the EC2 instance, then create and start a container from it:
  12. Pull the image from the registry:
```
docker pull <Image_URI>
```
***Hint:*** Replace the Image_URI with the same URI you used while pushing the image to the Registry.

 13. Create and start a container from the image:
 ```
 docker run -d -p 4000:4000 --name bmi_container {Image_name} 
 ```
***Hint:*** Replace the Image_name with the name of the image you pulled 

***Hint:*** You can list the imags you have on the EC2 instance using the command:
```
docker images
```
 14. Add an incound rule to the security group of the EC2 instance to allow traffic to the port 4000.

15. The application is deployed and you can access it from any where using the public IP address of the EC2 instance and the port number 4000 in this case.
```
{Public_IP}:4000
```
🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉








