# flattenapp

Convert XML to JSON  &amp; then flatten the properties in dotted notation and return Object keys as response.
Endpoint : "/getflattenkeys"
https://antaservice.herokuapp.com/getflattenkeys

{
	"xmlData": "<AAAAAAA><B><ConnectionType>a</ConnectionType><StartTime>00: 00: 00</StartTime><EndTime>00: 00: 00</EndTime><UseDataDictionary><UseDataDictionary2>G</UseDataDictionary2></UseDataDictionary></B></AAAAAAA>"
}

## pm2 tutorial

### Start an application

You can start any application (Node.js, Python, Ruby, binaries in $PATH...) like that:

```shell
$ pm2 start app.js
```

Your app is now daemonized, monitored and kept alive forever.

### Managing Applications

Once applications are started you can manage them easily:


To list all running applications:

```shell
$ pm2 list
```

Managing apps is straightforward:

```shell
$ pm2 stop     <app_name|namespace|id|'all'|json_conf>
$ pm2 restart  <app_name|namespace|id|'all'|json_conf>
$ pm2 delete   <app_name|namespace|id|'all'|json_conf>
```

To have more details on a specific application:

```shell
$ pm2 describe <id|app_name>
```

To monitor logs, custom metrics, application information:

```shell
$ pm2 monit
```
