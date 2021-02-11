function detailRating(rating){
  return `
<div style="background-color: #f1f1f1;">
  <div style="height:24px;width:${rating}%;background-color:blue;text-align:right;color:#fff;padding-right:5px;">${rating}%</div>
</div>
`;
}

export default detailRating;