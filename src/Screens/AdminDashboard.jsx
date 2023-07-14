import React, { useEffect } from 'react';
import '../CssFolder/AdminDashboard.css';
import { initNav } from '../Components/navBar';
import { useDispatch, useSelector } from 'react-redux';
import FetchSlider from '../Redux/Actions/FetchSlider';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
    const movieList = useSelector(state => state.slider[0]);
    const imageUrl = 'https://image.tmdb.org/t/p/original';
    const nav = useNavigate();
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchSlider());

  }, []);

  const deleteMovie = (id) => {
    const index = movieList?.results?.findIndex(x => x.id === id);
    const delMe = {
        ...movieList,
        results: [...movieList.results.slice(0, index),
        ...movieList.results.slice(index + 1)]
    }
    dispatch({type: 'deleteMovie', payload: delMe})
  }
  return (
    <div className='dashboardContainer'>
        <div className='steppers'>
            <div style={{display: 'flex', alignItems: 'center', gap: 30}}>
            <img src="https://images.slivcdn.com/UI_icons/sonyliv_new_revised_header_logo.png?h=40&w=40&t=c_fill&q=low&fr=webp" alt="logo" />
            <u style={{fontSize: '20px', fontWeight: '600', color: 'red'}}>Admin Page</u>
            </div>
            <div className='btnMap'>
            {initNav.map(x => (
                    <button className='adminNavBtn' key={x}>{x}</button>
                    ))}
            </div>
            <button className='logout'>Logout</button>
        </div>
        <div className='contentContainer'>
                {
                    movieList?.results?.map(x => (
                        <div className='movieCard' key={x.id}>
                          {!x.poster_path.startsWith('https') ? <img src={imageUrl + x.poster_path} alt="movieImage" className='movieImg' /> : <img src={x.poster_path} alt="movieImage" className='movieImg' />}
                            
                            <div className='movieDesc'>
                                <h1>{x.title}</h1>
                                <h4><strong style={{color: 'red', fontSize: 16, fontWeight: 'bolder'}}>Movie Description:</strong> {x.overview}</h4>
                                <h4><strong style={{color: 'red', fontSize: 16, fontWeight: 'bolder'}}>Vote:</strong> {x.vote_average} / 10</h4>
                            </div>
                            <button className='delBtn' onClick={() => deleteMovie(x.id)}>Delete</button>
                        </div>
                    ))
                }
                <button className='addBtn' onClick={() => nav('/admin/adminMovieAdd')}>Add New Movie</button>
        </div>
    </div>
  )
}

export default AdminDashboard