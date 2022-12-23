import Anchor from './Anchor';
import Tooltip from '../Tooltip';
import './header.module.scss';
import { Tie, Shoes, Watch, Clothes, Gift, Grooming, Fragance } from '../Icons';
function HeaderNav() {
    const anchors = [
        { name: 'Clothing', path: '/clothing', firstIcon: Clothes },
        { name: 'Shoes', path: '/shoes', firstIcon: Shoes },
        { name: 'Accessories', path: '/accessories', firstIcon: Tie },
        { name: 'Watches', path: '/watches', firstIcon: Watch },
        { name: 'Gifts', path: '/gifts', firstIcon: Gift },
        { name: 'Grooming', path: '/grooming', firstIcon: Fragance },
        { name: 'About', path: '/about' },
        
    ];
    return (
        <nav>
            {anchors.map((anchor) => {
                if (anchor.tooltip) {
                    return (
                        <Tooltip key={anchor.name} content={anchor.content}>
                            <div>
                                <Anchor
                                    name={anchor.name}
                                    path={anchor.path}
                                    firstIcon={anchor.firstIcon}
                                    secondIcon={anchor.secondIcon}
                                />
                            </div>
                        </Tooltip>
                    );
                } else {
                    return (
                        <Anchor
                            key={anchor.name}
                            name={anchor.name}
                            path={anchor.path}
                            firstIcon={anchor.firstIcon}
                            secondIcon={anchor.secondIcon}
                        />
                    );
                }
            })}
        </nav>
    );
}

export default HeaderNav;
