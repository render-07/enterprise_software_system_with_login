const AddCategoryButton = ({text, onAdd, color}) => {
    return (
        <button className = 'btn' 
            onClick = {onAdd}
            style = {{color: 'white', backgroundColor: '#001719'}}>
            {text}      
        </button>

    )
}

export default AddCategoryButton
