import { useState, useEffect } from 'react';
import axios from 'axios';
const Twitter = () => {
  let [twitter, setTwitter] = useState([
    {
      title: 'Kashmir Files',
      body: 'Film based on assassination of kashmiri pandits',
      date_of_creation: '202-02-21',
      author: 'Vivek Agnihotri',
      category: 'entertainment',
    },
  ]);
  useEffect(() => {
    getTwitter();
  }, []);
  const getTwitter = () => {
    axios
      .get('/twitter')
      .then((res) => {
        setTwitter(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const addTwitter = (event) => {
    event.preventDefault();
    let twitterObject = {
      title: event.target.title.value,
      body: event.target.body.value,
      date_of_creation: event.target.date_of_creation.value,
      author: event.target.author.value,
      category: event.target.category.value,
    };
    axios
      .post('/twitter', twitterObject)
      .then((res) => {
        getTwitter();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  let deleteTwitterOb = (indexTo) => {
    axios
      .delete('/twitter/' + indexTo)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    getTwitter();
  };
  const deleteAll = () => {
    axios
      .get('/twitter/clearall')
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    getTwitter();
  };
  return (
    <div className='twitter'>
      <form onSubmit={addTwitter} className='productform'>
        <h1>Twitter</h1>
        <input type='text' name='title' placeholder='title' />
        <br />
        <textarea
          name='body'
          className='desc'
          placeholder='Describe.....'
        />{' '}
        <br />
        <b>Date :</b>
        <input type='date' name='date_of_creation' /> <br />
        <b>Author</b>
        <input type='text' name='author' placeholder='Author' /> <br />
        <br />
        <b>Category : </b>
        <select name='category' className='custom-select mr-sm-2'>
          <option value='Entertainment'>Entertainment</option>
          <option value='Study'>study</option>
          <option value='Politics'>Politics</option>
          <option value='Sports'>Sports</option>
        </select>{' '}
        <br /> <br />
        <button className='tw'>Add</button>
      </form>
      {twitter.map((val, index) => {
        return (
          <div className='container py-5'>
            <div className='row'>
              <div className='col-lg-8 mx-auto'>
                <ul className='list-group shadow'>
                  <li className='list-group-item'>
                    <div className='media align-items-lg-center flex-column flex-lg-row p-3'>
                      <div className='media-body order-2 order-lg-1'>
                        <h5 className='mt-0 font-weight-bold mb-2'>
                          {val.title}
                        </h5>
                        <p className='font-italic text-muted mb-0 small'>
                          {val.body}
                        </p>
                        <div className='d-flex align-items-center justify-content-between mt-1'>
                          <h6 className='font-weight-bold my-2'>
                            {val.date_of_creation}
                          </h6>
                          <h6 className='font-weight-bold my-2'>
                            Author: {val.author}
                          </h6>
                          <h6 className='font-weight-bold my-2'>
                            Category: {val.category}
                          </h6>
                        </div>
                      </div>
                    </div>
                  </li>
                  <button
                    className='tw'
                    onClick={() => {
                      deleteTwitterOb(index);
                    }}
                  >
                    <b>Delete</b>
                  </button>
                </ul>
              </div>
            </div>
          </div>
        );
      })}
      <button className='twall' onClick={deleteAll}>
        <b>Delete All</b>
      </button>
      <br />
    </div>
  );
};
export default Twitter;
