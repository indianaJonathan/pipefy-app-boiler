/* globals PipefyApp */
import React from "react";
import { createRoot } from "react-dom/client";

const pipefy = PipefyApp ? PipefyApp.init() : null;

const container = document.getElementById('root');
const root = createRoot(container);

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pipe: null
        };
    }

    componentDidMount() {
        PipefyApp && PipefyApp.render(() => {
            pipefy.pipe().then((pipe) => {
                this.setState({ pipe });
            });
        });
    }

    renderLoading () {
        return (
            <div
                style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: "100vh",
                    width: "100vw"
                }}
            >
                <span
                    style={{
                        fontSize: "1.3rem",
                        fontWeight: "600"
                    }}
                >
                    Loading information...
                </span>
            </div>
        );
    }

    render() {
        if (!this.state.pipe) {
            return this.renderLoading();
        }
        return (
            <div
                style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: "100vh",
                    width: "100vw"
                }}
            >
                <div
                    style={{
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        gap: ".5rem",
                    }}
                >
                    <span
                        style={{
                            fontSize: "1.3rem",
                            fontWeight: "600"
                        }}
                    >
                        Loading information from
                    </span>
                    <span style={{
                        color: "skyblue",
                        fontSize: "1.3rem",
                        fontWeight: "600",
                        textTransform: "uppercase"
                    }}>
                        {this.state.pipe.name}
                    </span>
                    <span
                        style={{
                            fontSize: "1.3rem",
                            fontWeight: "600"
                        }}
                    >
                        pipe
                    </span>
                </div>
            </div>
        );
    }
}

root.render(<App />);
