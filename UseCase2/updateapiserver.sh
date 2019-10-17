#!/bin/bash
sed -i "s/mollb.eastus2.cloudapp.azure.com/$1/g" /var/www/html/demo/index.html
