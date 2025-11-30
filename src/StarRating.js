
export default function StarRating(){
    return(
        <div>
            <div>
                {Array.from({length: 5}, (_, i) => (
                    <span>s{i+1}</span>
                ))}
            </div>
            <p>10</p>
        </div>
    )
}
