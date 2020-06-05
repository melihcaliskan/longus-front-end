export const Loader = () => {
    return (
        <div style={{ width: "100vw", height: "100vh", transition: ".7s all", transitionTimingFunction: "ease-out", backgroundColor: 'transparent' }}>
            <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                <svg width="120" height="30" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg" fill="#007BFF">
                    <circle cx="15" cy="15" r="15">
                        <animate attributeName="r" from="15" to="15"
                            begin="0s" dur="0.8s"
                            values="15;9;15" calcMode="linear"
                            repeatCount="indefinite" />
                        <animate attributeName="fillOpacity" from="1" to="1"
                            begin="0s" dur="0.8s"
                            values="1;.5;1" calcMode="linear"
                            repeatCount="indefinite" />
                    </circle>
                    <circle cx="60" cy="15" r="9" fillOpacity="0.3">
                        <animate attributeName="r" from="9" to="9"
                            begin="0s" dur="0.8s"
                            values="9;15;9" calcMode="linear"
                            repeatCount="indefinite" />
                        <animate attributeName="fillOpacity" from="0.5" to="0.5"
                            begin="0s" dur="0.8s"
                            values=".5;1;.5" calcMode="linear"
                            repeatCount="indefinite" />
                    </circle>
                    <circle cx="105" cy="15" r="15">
                        <animate attributeName="r" from="15" to="15"
                            begin="0s" dur="0.8s"
                            values="15;9;15" calcMode="linear"
                            repeatCount="indefinite" />
                        <animate attributeName="fillOpacity" from="1" to="1"
                            begin="0s" dur="0.8s"
                            values="1;.5;1" calcMode="linear"
                            repeatCount="indefinite" />
                    </circle>
                </svg>
            </div>
        </div>
    )
}

export default Loader