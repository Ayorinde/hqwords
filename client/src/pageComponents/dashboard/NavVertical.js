import React from 'react';
import { Link, NavLink as RLink, BrowserRouter, Route , Switch} from 'react-router-dom'
import { Nav, NavItem, NavLink } from 'reactstrap';

import UploadForm from '../../pageComponents/dashboard/UploadForm';
import BookList from '../../pageComponents/Books/BooksList';
import {GET_USER_BOOKS} from '../../apollo/queries/books';

import {logout} from '../../helpers'
import * as routes from '../../constants/routes'

export default function NavVertical({ match, history }) {
    //{`${match.url}/${id}`}
    const routes = [
        {
            path: `${match.url}/upload`,
            exact: true,
            sidebar: () => (
                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                    <UploadForm history={history} baseUrl={match.url} />
                </div>),
            main: () => <UploadForm />
        },
        {
            path: `${match.url}/books`,
            exact: true,
            sidebar: () => (
                <div className="tab-pane fade show active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                    <BookList listTitle='My Books' listQuery={GET_USER_BOOKS}/>
                </div>
            ),
            main: () => <h2>Bubblegum</h2>
        },
        // {
        //     path: `${match.url}/logout`,
        //     exact: true,
        //     sidebar: () => (
        //         <div className="tab-pane fade show active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
        //             <BookList listTitle='My Books' listQuery={GET_USER_BOOKS}/>
        //         </div>
        //     ),
        //     main: () => <h2>Bubblegum</h2>
        // }
    ];

    const handleLogout = () =>{
        logout();
        history.push({ pathname: routes.LANDING })
    }

    return (
        <BrowserRouter>
            <div className="py-3 y-navvertical">
                <div className="row">

                    <div className="col-3">
                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <RLink to={`${match.url}/upload`} className="nav-link" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home"
                                role="tab" aria-controls="v-pills-home" aria-selected="true">
                                Upload Book
                            </RLink>
                            <RLink to={`${match.url}/books`} className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile"
                                role="tab" aria-controls="v-pills-profile" aria-selected="false">
                                My Books
                            </RLink>
                            <button className="nav-link" onClick={handleLogout}>Log Out</button>

                        </div>
                    </div>

                    {/* <div className="col-9">
                        <div className="tab-content" id="v-pills-tabContent">
                            <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                <UploadForm />
                            </div>
                            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
                            <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
                            <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
                        </div>
                    </div> */}

                    <div className="col-9">
                        <div className="tab-content" id="v-pills-tabContent">
                        
                            <Switch>
                                {routes.map((route, index) => (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        component={route.sidebar}
                                    />
                                ))}

                            </Switch>
                            
                        </div>
                    </div>
                </div>
            </div>

        </BrowserRouter >
    )
}