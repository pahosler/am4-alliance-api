package main

import (
	"context"
	"fmt"
	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"io/ioutil"
	"net/http"
)

func getAlliance() string {
	var token = "KJWRFSERGWerDSWFWeoriwoWODESTRgSWDF:456787654Vjhved"
	var alliance = "tiger-team1"
	var am4 = ""
	response, err := http.Get("https://airline4.net/api?access_token=" + token + "&search=" + alliance)

	if err != nil {
		am4 = fmt.Sprintf("There was an error, %s", err)
	} else {
		data, _ := ioutil.ReadAll(response.Body)
		am4 = string(data)
	}

	return am4
}

func handler(ctx context.Context, request events.APIGatewayProxyRequest) (*events.APIGatewayProxyResponse, error) {
	res := getAlliance()
	return &events.APIGatewayProxyResponse{
		StatusCode: 200,
		Body:       res,
		Headers: map[string]string{
			"Access-Control-Allow-Origin":  "*",
			"Access-Control-Allow-Headers": "Content-Type",
			"Access-Control-Allow-Headers": "application/json",
		},
	}, nil
}

func main() {
	lambda.Start(handler)
}
