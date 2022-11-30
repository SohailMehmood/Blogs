import { Link } from "react-router-dom"
import { useContext } from "react";
import { AppContext } from "./Context";
function MainNavigation()
{
    const { theme } = useContext(AppContext);
    
    return (
        <div>
            <div>Theme name is { theme }</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All blogs</Link>
                    </li>
                    <li>
                        <Link to='/new-blog'>New blog</Link>
                    </li>
                </ul>
            </nav >
        </div >
    )
}

export default MainNavigation;