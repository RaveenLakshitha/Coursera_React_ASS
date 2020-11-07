import React, { Component } from 'react'
import { Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle } from 'reactstrap'


class Dishdetail extends Component {
    constructor(props){
        super(props);

        this.state={
            }
        }
renderComments=(comments)=>{
    if(comments!=null){
        const commenter = comments.map(com=>{
        return(
            <div> 
                <li>{com.comment}</li><br />
                <li>--{com.author},{com.date}</li><br/> 
            </div>
                )
            }
        )
        return(
            <ul className="list-unstyled">
                {commenter}
            </ul>
        )
    }
    else{
        return(
        <div></div>
        )
    }
}
 renderDish=(dish)=>{
     if(dish!=null){
            return(
            <div class="container">
                <div class='row'>
                    <div className="col-12 col-md-5 m-1"> 
                     <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                         <CardBody>
                         <CardTitle>{this.props.dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                         </CardBody>
                    </Card>
                    </div>
                <div className="col-12 col-md-5 m-1">
                    <div> <h4>Comments</h4></div>
                    {this.renderComments(dish.comments)}
                    </div>
                </div>  
            </div>
            )
         }
         else{
             return(
                 <div></div>
                    )
                }       
            }
      
    render() {
        const {dish} = this.props; 
        return (
            <div className="container">
            <div className='row'>
                {this.renderDish(dish)}  
            </div>
            </div>
        )
    }
}

export default Dishdetail