const AddCategoryButton = ({text, onAdd, color}) => {
    return (
        <button className = 'btn' 
            onClick = {onAdd}
            style = {{color: 'white', backgroundColor: color}}>
            {text}      
        </button>

    )
}

export default AddCategoryButton
