import React, { Component } from "react";
import { Input } from "reactstrap";
import $ from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default class DochExplanation extends Component {
    state = {
        isLoading: false,
    };
    validateForm() {
        const cookie = $("#cookie").val();
        const nickname = $("#nickname").val();

        const nickValidate = new RegExp(/^[a-zA-Z]+$/);

        //validate the cookie
        if (cookie.length < 100) {
            alert("שדה עוגייה לא ולידי");
        } else if (!nickValidate.test(nickname)) {
            //validate the nickname
            alert("כינוי לא ולידי");
        } else {
            this.setState({
                isLoading: true,
            });
            $.ajax({
                url: "/api/doch",
                type: "POST",
                dataType: "json",
                data: JSON.stringify({
                    cookie: cookie,
                    nickname: nickname,
                }),
                contentType: "application/json",
                success: () => {
                    this.setState({ isLoading: false });
                    alert("נוספת! , תהנה בונבון");
                },
            });
        }
    }
    render() {
        return (
            <div className="container-fluid" id="explanationWrapper">
                {this.state.isLoading && (
                    <FontAwesomeIcon
                        icon={faSpinner}
                        className="loading"
                        spin
                    ></FontAwesomeIcon>
                )}
                <h1 className="text-center display-3">מה עושים?</h1>
                <ol className="doch-list">
                    <li>
                        פותחים את Chrome ולוחצים F12 עוברים לעמוד Network לאחר
                        מכן לוחצים ctrl+r{" "}
                        <img
                            src="../../assets/images/doch/doch-img-1.PNG"
                            className="img-fluid"
                        />
                    </li>
                    <li>
                        עוברים לאתר{" "}
                        <a href="https://one.prat.idf.il">דו"ח אחד</a>
                    </li>
                    <li>מתחברים למערכת</li>
                    <li>
                        מחפשים בעמוד Network את הבקשה getUser ולוחצים עליה
                        <br />
                        <img
                            src="../../assets/images/doch/doch-img-2.PNG"
                            className="img-fluid"
                        />
                    </li>
                    <li>
                        מחפשים תחת הכותרת Request Headers את השדה Cookie
                        <br />
                        <img
                            src="../../assets/images/doch/doch-img-3.PNG"
                            className="img-fluid"
                        />
                    </li>
                    <li>
                        מעתיקים את כל מה שכתוב שם לפה :{" "}
                        <Input placeholder="cookie" id="cookie"></Input>
                    </li>
                    <li>
                        בוחרים כינוי באנגלית כדי שאוכל לעקוב אחרי הבקשות שלכם{" "}
                        <Input placeholder="דוג' y-golde" id="nickname"></Input>
                    </li>
                    <li>
                        לוחצים על שלח{" "}
                        <button
                            className="doch-send"
                            onClick={() => this.validateForm()}
                        >
                            שלח!
                        </button>
                    </li>
                    <li>
                        נהנים מדוח אחד אוטומטי כל יום ב7 בבוקר{" "}
                        <sup>בלי נדר</sup>
                    </li>
                </ol>
            </div>
        );
    }
}
