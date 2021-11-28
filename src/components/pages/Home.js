import React, { useEffect, useState } from 'react'

import Header from '../imports/Header';
import SubHeader from '../imports/SubHeader';
import AddCategory from '../imports/AddCategory';
import Categories from '../imports/Categories';

import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function Home() {

    const user = useSelector(state => state.isLoggedIn);
    const history = useHistory()
  
    const route = () => {
       const token = localStorage.getItem('x-access-token')
       return token ? true : false
    }

    const [showAddCategory, setShowAddCategory] = useState(false)

    const toggleState = () => {
      setShowAddCategory(!showAddCategory)
    }

    useEffect(() => {
        if (!route()){
            history.push('/login')
        }
    }, [route, history])
    

    return (
    <>
        <Header></Header>
        <main className="body-bg">
        <div className="homeContainer">
                <SubHeader className="categ" text='CATEGORIES' onAdd={toggleState} changeColor={showAddCategory} style = {{color: '#6a8076'}}/>
                {showAddCategory && <AddCategory/>}
                {/*<Categories categories = {categories} onDelete = {deleteCategory} onToggle = {toggleReminder}/>*/}
                <Categories/>
            </div>
        <div className="rec-upper-h"></div>
        <div className="rec-lower-left-h"></div>
        <div className="rec-lower-right-h"></div>
            
           
        </main>
    </>    
    )
}
