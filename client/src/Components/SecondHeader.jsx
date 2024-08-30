import { useState } from "react";

function SecondHeader({ }) {
    //
    const [ hoveredMenu, setHoveredMenu ] = useState(null);

    const handleMouseEnter = (menuId) => {
        setHoveredMenu(menuId);
    }

    const handleMouseLeave = () => {
        setHoveredMenu(null);
    }


    function SearchSuggestCheckTerm() {
        //TODO:
    }

    function handleSubmitClick(event) {
        //TODO:
        event.preventDefault();
    }


    return (
        <div className="responsive_store_nav_ctn_spacer">
                <div id="store_header" role="navigation" aria-label="Store Menu">
                    <div className="content">
                        <div id="store_controls">
                            <div className="cart_status_flex" id="cart_status_data">
                                <div className="store_header_btn_green store_header_btn" id="store_header_cart_btn" style={{display: "none"}}>
                                    <div className="store_header_btn_caps store_header_btn_leftcap"></div>
                                    <div className="store_header_btn_caps store_header_btn_rightcap"></div>
                                    <a id="cart_link" className="store_header_btn_content" href="https://store.steampowered.com/cart/?snr=1_5_9__12">
                                        {" Cart ("}
                                        <span id="cart_item_count_value">0</span>
                                        {") "}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div id="store_nav_area">
                            <div className="store_nav_leftcap"></div>
                            <div className="store_nav_bg">
                                <div className="store_nav" data-panel={{"flow-children": "row"}}>
                                    <div className="tab  flyout_tab " id="foryou_tab" data-flyout="foryou_flyout" data-flyout-align="left" data-flyout-valign="bottom" data-flyout-delay="300" data-panel={{"focusable": true}} onMouseEnter={() => handleMouseEnter("Your Store")} onMouseLeave={handleMouseLeave}>
                                        <span className="pulldown">
                                            <a className="pulldown_desktop" href="">{`Your Store`}</a>
                                            <a className="pulldown_mobile" href="#">Your Store</a>
                                            <span></span>
                                        </span>
                                    </div>
                                    <div className="popup_block_new flyout_tab_flyout responsive_slidedown" id="foryou_flyout" style={{visibility: "visible", top: "42px", left: "0px", display: hoveredMenu === "Your Store" ? "block" : "none", opacity: 1}} onMouseEnter={() => handleMouseEnter("Your Store")} onMouseLeave={handleMouseLeave}>
                                        <div className="popup_body popup_menu popup_menu_browse">
                                            <a className="popup_menu_item" href=""> Home </a>
                                            <a className="popup_menu_item" href="">Community Recommendations</a>
                                            <a className="popup_menu_item" href=""> Recently Viewed </a>
                                            <a className="popup_menu_item" href=""> Steam Curators </a>
                                        </div>
                                    </div>
                                    <div className="store_labs_new"></div>
                                    <div className="tab  flyout_tab" id="noteworthy_tab" data-flyout="noteworthy_flyout" data-flyout-align="left" data-flyout-valign="bottom" data-flyout-delay="300" data-panel={{"focusable": true}} onMouseEnter={() => handleMouseEnter("Noteworthy")} onMouseLeave={handleMouseLeave}>
                                        <span className="pulldown">
                                            <a href="#" className="pulldown_desktop">{`New & Noteworthy`}</a>
                                            <a href="#" className="pulldown_mobile">New & Noteworthy</a>
                                            <span></span>
                                            
                                        </span>
                                    </div>
                                    <div className="popup_block_new flyout_tab_flyout responsive_slidedown" id="noteworthy_flyout" style={{visibility: "visible", top: "42px", left: "96.125px", display: hoveredMenu === "Noteworthy" ? "block" : "none", opacity: 1}} onMouseEnter={() => handleMouseEnter("Noteworthy")} onMouseLeave={handleMouseLeave}>
                                        <div className="popup_body popup_menu_twocol_new">
                                            <div className="popup_menu popup_menu_browse" data-panel={{"maintainY": true, "flowChildren": "column"}}>
                                                <div className="popup_menu_subheader responsive_hidden">Popular</div>
                                                <a className="popup_menu_item" href="https://store.steampowered.com/charts/topselling/?snr=1_5_9__12"> Top Sellers </a>
                                                <a className="popup_menu_item" href="https://store.steampowered.com/charts/mostplayed/?snr=1_5_9__12"> Most Played </a>
                                                <div className="category_hr responsive_hidden"></div>
                                                <a className="popup_menu_item" href="https://store.steampowered.com/explore/new/?snr=1_5_9__12"> New Releases </a>
                                                <a className="popup_menu_item" href="https://store.steampowered.com/explore/upcoming/?snr=1_5_9__12"> Upcoming Releases </a>
                                                <div className="popup_menu_subheader responsive_hidden">News & Updates</div>
                                                <a className="popup_menu_item" href="https://store.steampowered.com/newshub/?snr=1_5_9__12"> Recently Updated </a>
                                            </div>
                                            <div className="popup_menu popup_menu_browse leftborder" data-panel={{"maintainY": true, "flow-children": "column"}}>
                                                <div className="popup_menu_subheader responsive_hidden">Promos & Events</div>
                                                <a className="popup_menu_item" href="https://store.steampowered.com/specials/?snr=1_5_9__12"> Special Offers </a>
                                                <a className="popup_menu_item" href="https://store.steampowered.com/news/collection/sales/?snr=1_5_9__12"> Sale Events </a>
                                                <div className="category_hr responsive_hidden"></div>
                                                <a className="popup_menu_item" href="https://store.steampowered.com/yearinreview?src=7&snr=1_5_9__12">
                                                    {`Steam Year In Review `}
                                                    <span className="new">New</span>
                                                </a>
                                                <a className="popup_menu_item" href="https://store.steampowered.com/sale/nextfest?snr=1_5_9__12"> Steam Next Fest </a>
                                                <a className="popup_menu_item" href="https://store.steampowered.com/steamawards/?snr=1_5_9__12"> The Steam Awards </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab  flyout_tab" id="genre_tab" data-flyout="genre_flyout" data-flyout-align="left" data-flyout-valign="bottom" data-flyout-align-to-element="foryou_tab" data-flyout-delay="300" data-panel={{"focusable": true}} onMouseEnter={() => handleMouseEnter("Categories")} onMouseLeave={handleMouseLeave}>
                                        <span className="pulldown">
                                            <a className="pulldown_desktop" href="#">{`Categorias`}</a>
                                            <a className="pulldown_mobile" href="#">Categories</a>
                                            <span></span>
                                        </span>
                                    </div>
                                    <div className="popup_block_new flyout_tab_flyout responsive_slidedown" id="genre_flyout" style={{visibility: "visible", top: "42px", left: "0px", display: hoveredMenu === "Categories" ? "block" : "none", opacity: 1}} onMouseEnter={() => handleMouseEnter("Categories")} onMouseLeave={handleMouseLeave}>
                                        <div className="popup_body popup_menu_twocol_new">
                                            <div className="popup_menu popup_menu_browse" data-panel={{"maintainY": true, "flow-children": "column"}}>
                                                <div className="popup_menu_subheader responsive_hidden">Special Sections</div>
                                                <a className="popup_menu_item" href=""> Free to Play </a>
                                                <a className="popup_menu_item" href="">
                                                    <span>Demos</span>
                                                </a>
                                                <a className="popup_menu_item" href=""> Early Access </a>
                                                <div className="category_hr responsive_hidden"></div>
                                                <a className="popup_menu_item" href="">
                                                    <span>Steam Deck</span>
                                                </a>
                                                <a className="popup_menu_item" href="">
                                                    <span>Great on Deck</span>
                                                </a>
                                                <div className="category_hr responsive_hidden"></div>
                                                <a className="popup_menu_item" href="">
                                                    <span>Controller-Friendly</span>
                                                </a>
                                                <a className="popup_menu_item" href="">
                                                    <span>Remote Play</span>
                                                </a>
                                                <div className="category_hr responsive_hidden"></div>
                                                <a className="popup_menu_item" href="">
                                                    <span>VR Titles</span>
                                                </a>
                                                <a className="popup_menu_item" href="">
                                                    <span>VR Hardware</span>
                                                </a>
                                                <div className="category_hr responsive_hidden"></div>
                                                <a className="popup_menu_item" href=""> Software </a>
                                                <a className="popup_menu_item" href=""> Soundtracks </a>
                                                <div className="category_hr responsive_hidden"></div>
                                                <a className="popup_menu_item" href=""> macOS </a>
                                                <a className="popup_menu_item" href=""> SteamOS + Linux </a>
                                                <a className="popup_menu_item" href="">
                                                    <span>For PC Cafés</span>
                                                </a>
                                            </div>
                                            <div className="popup_menu popup_menu_browse leftborder" data-panel={{"maintainY": true, "flow-children": "column"}}>
                                                <div className="popup_menu_subheader reduced_vspace"> Genres </div>
                                                <div className="popup_menu_item popup_genre_expand_header nonresponsive_hidden" data-genre-group="action"> Action </div>
                                                <div className="popup_menu_subheader popup_genre_expand_header responsive_hidden" data-genre-group="action">
                                                    <a className="popup_menu_item" href=""> Action </a>
                                                </div>
                                                <div className="popup_genre_expand_content responsive_hidden" data-genre-group="action">
                                                    <a className="popup_menu_item" href="">Arcade & Rhythm</a>
                                                    <a className="popup_menu_item" href="">Fighting & Martial Arts</a>
                                                    <a className="popup_menu_item" href="">First-Person Shooter</a>
                                                    <a className="popup_menu_item" href="">Hack & Slash</a>
                                                    <a className="popup_menu_item" href="">Platformer & Runner</a>
                                                    <a className="popup_menu_item" href="">Third-Person Shooter</a>
                                                    <a className="popup_menu_item" href="">shmup</a>
                                                </div>
                                                <div className="popup_menu_item popup_genre_expand_header nonresponsive_hidden" data-genre-group="adventure"> Adventure </div>
                                                <div className="popup_menu_subheader popup_genre_expand_header responsive_hidden" data-genre-group="adventure">
                                                    <a className="popup_menu_item" href=""> Adventure </a>
                                                </div>
                                                <div className="popup_genre_expand_content responsive_hidden" data-genre-group="adventure">
                                                    <a className="popup_menu_item" href="">Adventure RPG</a>
                                                    <a className="popup_menu_item" href="">Casual</a>
                                                    <a className="popup_menu_item" href="">Hidden Object</a>
                                                    <a className="popup_menu_item" href="">Metroidvania</a>
                                                    <a className="popup_menu_item" href="">Puzzle</a>
                                                    <a className="popup_menu_item" href="">Story-Rich</a>
                                                    <a className="popup_menu_item" href="">Visual Novel</a>
                                                </div>
                                            </div>
                                            <div className="popup_menu popup_menu_browse " data-panel={{"maintainY": true, "flow-children": "column"}}>
                                                <div className="popup_menu_subheader reduced_vspace responsive_hidden">
                                                    <br></br>
                                                </div>
                                                <div className="popup_menu_item popup_genre_expand_header nonresponsive_hidden" data-genre-group="rpg"> Role-Playing </div>
                                                <div className="popup_menu_subheader popup_genre_expand_header responsive_hidden" data-genre-group="rpg">
                                                    <a className="popup_menu_item" href=""> Role-Playing </a>
                                                </div>
                                                <div className="popup_genre_expand_content responsive_hidden" data-genre-group="rpg">
                                                    <a className="popup_menu_item" href="">Action RPG</a>
                                                    <a className="popup_menu_item" href="">Adventure RPG</a>
                                                    <a className="popup_menu_item" href="">JRPG</a>
                                                    <a className="popup_menu_item" href="">Party-Based</a>
                                                    <a className="popup_menu_item" href="">Rogue-Like</a>
                                                    <a className="popup_menu_item" href="">Strategy RPG</a>
                                                    <a className="popup_menu_item" href="">Turn-Based</a>
                                                </div>
                                                <div className="popup_menu_item popup_genre_expand_header nonresponsive_hidden" data-genre-group="simulation"> Simulation </div>
                                                <div className="popup_menu_subheader popup_genre_expand_header responsive_hidden" data-genre-group="simulation">
                                                    <a className="popup_menu_item" href=""> Simulation </a>
                                                </div>
                                                <div className="popup_genre_expand_content responsive_hidden" data-genre-group="simulation">
                                                    <a className="popup_menu_item" href="">Building & Automation</a>
                                                    <a className="popup_menu_item" href="">Dating</a>
                                                    <a className="popup_menu_item" href="">Farming & Crafting</a>
                                                    <a className="popup_menu_item" href="">Hobby & Job</a>
                                                    <a className="popup_menu_item" href="">Life & Immersive</a>
                                                    <a className="popup_menu_item" href="">Sandbox & Physics</a>
                                                    <a className="popup_menu_item" href="">Space & Flight</a>
                                                </div>
                                            </div>
                                            <div className="popup_menu popup_menu_browse " data-panel={{"maintainY": true, "flow-children": "column"}}>
                                                <div className="popup_menu_subheader reduced_vspace responsive_hidden">
                                                    <br></br>
                                                </div>
                                                <div className="popup_menu_item popup_genre_expand_header nonresponsive_hidden" data-genre-group="strategy"> Strategy </div>
                                                <div className="popup_menu_subheader popup_genre_expand_header responsive_hidden" data-genre-group="strategy">
                                                    <a className="popup_menu_item" href=""> Strategy </a>
                                                </div>
                                                <div className="popup_genre_expand_content responsive_hidden" data-genre-group="strategy">
                                                    <a className="popup_menu_item" href="">Card & Board</a>
                                                    <a className="popup_menu_item" href="">City & Settlement</a>
                                                    <a className="popup_menu_item" href="">Grand & 4X</a>
                                                    <a className="popup_menu_item" href="">Military</a>
                                                    <a className="popup_menu_item" href="">Real-Time Strategy</a>
                                                    <a className="popup_menu_item" href="">Tower Defense</a>
                                                    <a className="popup_menu_item" href="">Turn-Based Strategy</a>
                                                </div>
                                                <div className="popup_menu_item popup_genre_expand_header nonresponsive_hidden" data-genre-group="sports_and_racing"> Sports & Racing </div>
                                                <div className="popup_menu_subheader popup_genre_expand_header responsive_hidden" data-genre-group="sports_and_racing">
                                                    <a className="popup_menu_item" href=""> Sports & Racing </a>
                                                </div>
                                                <div className="popup_genre_expand_content responsive_hidden" data-genre-group="sports_and_racing">
                                                    <a className="popup_menu_item" href="">All Sports</a>
                                                    <a className="popup_menu_item" href="">Fishing & Hunting</a>
                                                    <a className="popup_menu_item" href="">Individual Sports</a>
                                                    <a className="popup_menu_item" href="">Racing</a>
                                                    <a className="popup_menu_item" href="">Racing Sim</a>
                                                    <a className="popup_menu_item" href="">Sports Sim</a>
                                                    <a className="popup_menu_item" href="">Team Sports</a>
                                                </div>
                                            </div>
                                            <div className="popup_menu popup_menu_browse leftborder" data-panel={{"maintainY": true, "flow-children": "column"}}>
                                                <div className="popup_menu_item popup_genre_expand_header nonresponsive_hidden" data-genre-group="themes"> Themes </div>
                                                <div className="popup_menu_subheader players popup_genre_expand_header responsive_hidden"> Themes </div>
                                                <div className="popup_genre_expand_content responsive_hidden" data-genre-group="themes">
                                                    <a className="popup_menu_item" href="">Anime</a>
                                                    <a className="popup_menu_item" href="">Horror</a>
                                                    <a className="popup_menu_item" href="">Mystery & Detective</a>
                                                    <a className="popup_menu_item" href="">Open World</a>
                                                    <a className="popup_menu_item" href="">Sci-Fi & Cyberpunk</a>
                                                    <a className="popup_menu_item" href="">Space</a>
                                                    <a className="popup_menu_item" href="">Survival</a>
                                                    <div className="spacer responsive_hidden"></div>
                                                </div>
                                                <div className="popup_menu_item popup_genre_expand_header nonresponsive_hidden" data-genre-group="social_and_players"> Player Support </div>
                                                <div className="popup_menu_subheader players popup_genre_expand_header responsive_hidden"> Player Support </div>
                                                <div className="popup_genre_expand_content responsive_hidden" data-genre-group="social_and_players">
                                                    <a className="popup_menu_item" href="">Co-Operative</a>
                                                    <a className="popup_menu_item" href="">LAN</a>
                                                    <a className="popup_menu_item" href="">Local & Party</a>
                                                    <a className="popup_menu_item" href="">MMO</a>
                                                    <a className="popup_menu_item" href="">Multiplayer</a>
                                                    <a className="popup_menu_item" href="">Online Competitive</a>
                                                    <a className="popup_menu_item" href="">Singleplayer</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a className="tab  " href="">
                                        <span>Points Shop</span>
                                    </a>
                                    <a className="tab  " href="">
                                        <span>News</span>
                                    </a>
                                    <a className="tab  " href="">
                                        <span>Labs</span>
                                    </a>
                                    <div className="search_flex_spacer"></div>
                                    <div className="search_area">
                                        <div id="store_search">
                                            <form id="searchform" name="searchform" method="get" action="https://store.steampowered.com/search/" onSubmit={SearchSuggestCheckTerm()} role="search">
                                                <input type="hidden" name="snr" value="1_5_9__12"></input>
                                                <div className="searchbox">
                                                    <input id="store_nav_search_term" name="term" type="search" className="default" placeholder="Search" size="22" autoComplete="off" maxLength="64"></input>
                                                    <a href="#" id="store_search_link" onClick={(e) => {var $Form = $J(this).parents('form'); $Form.submit(); return false;}} aria-label="Search Steam">
                                                        <img src="https://store.akamai.steamstatic.com/public/images/blank.gif"></img>
                                                    </a>
                                                </div>
                                            </form>
                                        </div>
                                        <div id="searchterm_options" className="search_suggest popup_block_new" style={{display: "none"}}>
                                            <div className="popup_body search_v2" style={{borderTop: "none"}}>
                                                <div id="search_suggestion_contents"> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="store_nav_rightcap"></div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default SecondHeader;