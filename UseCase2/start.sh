#!/bin/bash 
#Runme as root

setenforce 0
yum install -y git
yum install -y httpd
systemctl start httpd
curl -sL https://rpm.nodesource.com/setup_10.x | sudo bash -
yum install -y nodejs
npm init -y
npm set strict-ssl false
npm install express -save
npm install mysql -save
npm install body-parser
npm install --save-dev nodemon
npm install appdynamics@4.5.13

git clone https://scm.dimensiondata.com/sandor.bihary/mol_hybrid_cloud.git  ###Change it to the final repository. Repo need to be open.
cp -rv mol_hybrid_cloud/UseCase2/html/* /var/www/html/
nohup node mol_hybrid_cloud/UseCase2/firstapp/server.js &
