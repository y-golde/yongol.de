package main

import (
	"encoding/csv"
	"encoding/json"
	"fmt"
	"net/http"
	"os"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

var (
	users = []string{"Joe", "Veer", "Zion"}
)

func getUsers(c echo.Context) error {
	return c.JSON(http.StatusOK, users)
}

func bruh(c echo.Context) error {
	json_map := make(map[string]interface{})
	err := json.NewDecoder(c.Request().Body).Decode(&json_map)
	if err != nil {
		return err
	} else {
		//json_map has the JSON Payload decoded into a map
		name := json_map["cookie"].(string)
		last := json_map["nickname"].(string)
		fmt.Println(name, last)
		addRow([]string{name, last})
		return c.JSON(200, json_map)
	}
}

func addRow(jsonmap []string) {
	f, err := os.OpenFile("test.csv", os.O_WRONLY|os.O_CREATE|os.O_APPEND, 0644)
	if err != nil {
		fmt.Println("Error: ", err)
		return
	}
	w := csv.NewWriter(f)
	w.Write(jsonmap)
	w.Flush()
}

func main() {
	e := echo.New()
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	// CORS default
	// Allows requests from any origin wth GET, HEAD, PUT, POST or DELETE method.
	e.Use(middleware.CORS())

	// CORS restricted
	// Allows requests from any `https://labstack.com` or `https://labstack.net` origin
	// wth GET, PUT, POST or DELETE method.
	// e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
	// 	AllowOrigins: []string{"https://localhost:8080"},
	// 	AllowMethods: []string{http.MethodGet, http.MethodPut, http.MethodPost, http.MethodDelete},
	// }))

	e.GET("/api/users", getUsers)
	e.POST("/api/bruh", bruh)

	e.Logger.Fatal(e.Start(":1323"))
}
