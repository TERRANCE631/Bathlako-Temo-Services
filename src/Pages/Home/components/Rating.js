
export function Rating({testimonial}) {
    return (
        <div className="star-rating">
            {[...Array(5)].map((_, i) => (
                <span key={i} className={i < testimonial.rating ? "text-yellow-500" : "text-gray-300"}>
                    ★
                </span>
            ))}
        </div>
    )
}
