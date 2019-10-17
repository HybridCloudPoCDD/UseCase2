#!/bin/bash
sed -i "s/DBPASSWORD/$1/g" UseCase2/UseCase2/firstapp/server.js
sed -i "s/DBPASSWORD/$1/g" UseCase2/UseCase2/firstapp/app/model/db.js
