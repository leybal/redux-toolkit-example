import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import { Counter } from './features/counter/Counter';
import {Movies} from './features/movies/Movies';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <ul>
                        <li>
                        <Link to="/">Counter</Link>
                        </li>
                        <li>
                        <Link to="/movies">Movies</Link>
                        </li>
                    </ul>
                </div>
            </header>

            <main>
                <Switch>
                    <Route exact path="/">
                        <Counter />
                    </Route>
                    <Route path="/movies">
                        <Movies />
                    </Route>
                </Switch>
            </main>

            <footer>
                <p>Coming soon</p>
            </footer>
        </div>
    );
}

export default App;
