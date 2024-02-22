import './sidebar.scss';
import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png'

const routes = [
    { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
    { title: 'Sales', icon: 'chart-line', path: '/sales' },
    { title: 'Costs', icon: 'chart-column', path: '/costs' },
    { title: 'Payments', icon: 'wallet', path: '/payments' },
    { title: 'Finances', icon: 'chart-pie', path: '/finances' },
    { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const bottomRoutes = [
    { title: 'Settings', icon: 'sliders', path: '/settings' },
    { title: 'Support', icon: 'phone-volume', path: '/support' },
];

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpened: true,
            isActive: 0,
        };
    }

    toggleActive = (index) => {
        this.setState( (state) => ({ isActive: state.isActive = index }) )
    }

    toggleSidebar = () => {
        this.setState((state) => ({ isOpened: !state.isOpened }) );
    };

    goToRoute = (path) => {
        console.log(`going to "${path}"`);
    };

    render() {
        const { isOpened, isActive } = this.state;

        const containerClassnames = classnames('sidebar', { opened: isOpened });

        return (
            <div className={ containerClassnames }>
                <div className='sidebar-logo'>
                    <img
                        src={ logo }
                        alt="TensorFlow logo"
                    />
                    <span>TensorFlow</span>
                    <button onClick={ this.toggleSidebar }>
                        <FontAwesomeIcon icon={ isOpened ? 'angle-left' : 'angle-right' } />
                    </button>
                </div>
                <div>
                    {
                        routes.map((route, index) => (
                            <div className={isActive === index ? 'sidebar-nav-el active' : 'sidebar-nav-el'} key={ route.title } onClick={ () => {
                                this.goToRoute(route.path)
                                this.toggleActive(index);
                            } }>
                                <FontAwesomeIcon icon={ route.icon } />
                                <span>{ route.title }</span>
                            </div>
                        ))
                    }
                </div>

                <div className='sidebar-nav-bottom'>
                       {
                           bottomRoutes.map((route) => (
                               <div className="sidebar-nav-el" key={ route.title } onClick={ () => this.goToRoute(route.path) }>
                                   <FontAwesomeIcon icon={ route.icon } />
                                   <span>{ route.title }</span>
                               </div>
                           ))
                       }
                   </div>
               </div>
        );
    }
}
