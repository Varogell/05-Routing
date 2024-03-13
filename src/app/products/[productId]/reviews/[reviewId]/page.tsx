type Props = {
    params: {
        productId: string,
        reviewId: string
         
    }
  }
  
  export default function ReviewDetails({ params }: Props) {
    return (
      <div>
        <h1>Details about Product {params.productId}</h1>
        <h2>Details about Review {params.reviewId}</h2>
        </div>
    )
  }