const containerStyle = {
        display : "flex",
        alignItems: "center",
        gap: "16px"
};

const starContainerStyle = {
    display : "flex",
    gap : "4px"
}

const textStyle = {
    lineHeight : "1",
    margin : "0",

}

export default function StarRating({maxRating = 5}){ //very common way in setting default props in React apps
    return(
        <div style={containerStyle}>
            <div style={starContainerStyle} >
                {Array.from({length: maxRating}, (_, i) => (
                    <span>s{i+1}</span>
                ))}
            </div>
            <p style={textStyle}>10</p>
        </div>
    )
}
