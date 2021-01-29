import React from 'react';
import './Frontpage.css';
import {Link} from 'react-router-dom'

// import category photos (7) for CategoriesHeaderComponent => CategoriesHeader








import enginePhoto from '../photos/engine.png'
import '../photos/categoriesPictures/m8x35.png'
function Header 
(props)
{
    return(
        <div className="Header">
            <div className="block1">
                <div className="adressWrapper">
                    <div className="adress-gpsiconWrapper">
                        <i class="fas fa-map-marker-alt" id="gps-icon"/>
                    </div>
                    <div className="adress-textWrapper">
                        <p className="adress-text">{props.address}</p>
                    </div>
                    <div className="adress-arrowiconWrapper">
                        <i class="fas fa-caret-down" id="adress-arrow-icon"/>
                    </div>
                </div>
            </div>
            <div className="block2">
                <div className="optionsWrapper">
                    <div className="options-contactWrapper">
                        <Link to="/contact" className="options-contact">Kontakt</Link>
                    </div>
                    <div className="options-aboutusWrapper">
                        <Link to="/aboutus" className="options-aboutus">O nas</Link>
                    </div>
                    <div className="options-helpcenterWrapper">
                        <Link to="/helpcenter" className="options-helpcenter">Centrum pomocy</Link>
                    </div>
                </div>
            </div>
            <div className="block3">
                <div className="usernameWrapper">
                    <div className="flagWrapper">
                        <div className="flag"/>
                    </div>
                    <i class="fas fa-caret-down" id="flag-arrow-icon"/>
                    <div className="Username-wrapper">
                        <p className="Username-text">{props.username}</p>
                    </div>
                    <i class="fas fa-caret-down" id="username-arrow-icon"/>
                </div>
            </div>
        </div>
    )
}
function CategoriesButton
(props)
{
    return(
        <div className="categoriesButtonWrapper">
            <button className="categoriesButton">
                <i class="fas fa-bars" id="barIcon"/>
                <p className="categoriesButton-text">Kategorie</p>
            </button>
        </div>
    )
}
function SearchInput
(props)
{
    // do ogarniecia:
    // zrobic zeby text pojawial sie troche bardziej na prawo
    // dodac emotke lupy po prawej na dole
    // zrobic animacje klikania ( moze np na zmiane border-radius na 0 czy cos)
    return(
        <div className="SearchInput">
            <input className="SearchForm" placeholder="Wyszukaj..."/>
        </div>
    )
}
function ContactSection
(props)
{
    return(
        <div className="contactWrapper">
            <div className="contact-phoneContactWrapper">
                <div className="contact-phoneText">
                    <p className="phoneText">Telefon</p>
                </div>
                <div className="contact-phoneNumber">
                    <p className="phoneNumber">{props.phoneNumber}</p>
                </div>
            </div>
            <div className="contact-emailContactWrapper">
                <div className="contact-emailText">
                    <p className="emailText">E-mail</p>
                </div>
                <div className="contact-emailAdress">
                    <p className="emailAdress">{props.emailAdress}</p>
                </div>
            </div>
        </div>
    )
}
function Shoppingcart
(props)
{
    return(
        <div className="ShoppingcartWrapper">
            <button className="Shoppingcart">
                <i class="fas fa-shopping-basket" id="shoppingcart-basketicon"/>
                <p className="shoppingcart-text">5 Częsci</p>
                <p className="shoppingcart-price">(200.00zł)</p>
                <i class="fas fa-caret-down" id="shoppingcart-arrowicon"/>
            </button>
        </div>
    )
}
function SecondHeader
(props)
{
    return(
        <div className="SecondHeader">
            <CategoriesButton/>
            <SearchInput/>
            <ContactSection emailAdress={props.emailAdress} phoneNumber={props.phoneNumber}/>
            <Shoppingcart/>
        </div>
    )
}
function HeaderBanner
(props)
{
    return(
        <div className="HeaderBanner">
            <div className="block1-HeaderBanner">
                <div className="shopTextWrapper-HeaderBanner">
                    <p className="shopText-HeaderBanner">{props.shopText}</p>
                </div>
                <div className="catalogButtonWrapper-HeaderBanner">
                    <button className="catalogButton-HeaderBanner">
                        <p className="catalogButtonText-HeaderBanner">Katalog</p>
                    </button>
                </div>
            </div>
            <div className="block2-HeaderBanner">
                <div className="picture-HeaderBanner">
                    <img className="enginephoto" src={enginePhoto} alt="enginePhoto" style={{
                        backgroundImage: ('../photos/engine.png'),
                        width: 525,
                        height: 503,
                        paddingTop: 90,
                    }}/>
                </div>
            </div>
        </div>
    )
}
function CategoriesHeader // on front page
(props)
{
    const categories = [
        { id:1, src: props.srcCategory1, title: props.titleCategory1},
        { id:2, src: props.srcCategory2, title: props.titleCategory2},
        { id:3, src: props.srcCategory3, title: props.titleCategory3},
        { id:4, src: props.srcCategory4, title: props.titleCategory4},
        { id:5, src: props.srcCategory5, title: props.titleCategory5},
        { id:6, src: props.srcCategory6, title: props.titleCategory6},
        { id:7, src: props.srcCategory7, title: props.titleCategory7}

    ]
    return(
        <div className="CategoriesHeader">
            <div className="categoriesWrapper-CategoriesHeader" style={{
                display: "flex"
            }}>
                {
                    categories.map(({id, src, title})=> {
                    return(
                        <CategoriesHeaderComponent categoryName={title} categoryPictureName={src} key={id}/>
            )
        })
                }
            </div>
        </div>
    )
}
function CategoriesHeaderComponent
(props)
{
    return(
        <div className="CategoriesHeader_Component" 
        style={{
            height: "100%",
            width: "125px"
        }}>
            <div className={props.categoryName + "-CategoriesHeader_Component"}>
                <div className={props.categoryName + "-pictureWrapper"}>
                    <img className={props.categoryName + "-picture"} 
                    src={props.categoryPictureName} 
                    alt={props.categoryName + "-alt"}
                    style={{
                        width: "178px",
                        height: "125px"
                    }}/>
                </div>
                <div className={props.categoryName + "-textWrapper"}>
                    <p className={props.categoryName + "-text"}>{props.categoryName}</p>
                </div>
            </div>
        </div>
    )
}
function NewProductsShowcase
(props)
{
    return(
        <div className="NewProductsShowcase">
            <div className="newproductstextWrapper">
                <p className="newproducts-text">{props.toptext}</p>
            </div>
            <div className="newproductsWrapper">
                
            </div>
        </div>
    )
}

function ProductBoxComponent
(props)
{
    return(
        <div className={props.productName + "productboxComponent"} style={{
            width: "278px",
            height: "320px",
            boxShadow: "0px 2px 4px rgba(100,100,100,0.5)"

        }}>
            <div className={props.productName + "productboxImageWrapper"}></div>
        </div>
    )
}


function Testcomponent
()
{
    return (
        <div className="testcomponent">
            <img src={require('../photos/productImages/tarczetrw.png')} alt="tarcze"/>
        </div>
    )
}

function Frontpage 
()
{   // poprawic to bo jakos sensowniej dalo sie to zrobic \/
    const dataState = {
        adress: "Tysiąclecia 43 Dąbrowa górnicza",
        username: "Karol Klimas",
        emailAdress: "blautauto@gmail.com",
        phoneNumber: "+48 669 061 781",
        shopText: "Internetowy sklep Auto Części",

        // src category zamienic na routy np '../photos/categoriesPictures/danyobrazek'
        titleCategory1: "Części zamienne",  srcCategory1: "1",
        titleCategory2: "Koła i opony",     srcCategory2: "2",
        titleCategory3: "Silnik",           srcCategory3: "3",
        titleCategory4: "Akcesoria",        srcCategory4: "4",
        titleCategory5: "Akumulatory",      srcCategory5: "5",
        titleCategory6: "Wycieraczki",      srcCategory6: "6",
        titleCategory7: "Oleje",            srcCategory7: "7",

        toptext: "Nowe produkty"

    }
    return (
        <div className="Frontpage">
            <Header address={dataState.adress} username={dataState.username} />
            <SecondHeader emailAdress={dataState.emailAdress} phoneNumber={dataState.phoneNumber}/>
            <HeaderBanner shopText={dataState.shopText}/>
            <CategoriesHeader
                titleCategory1={dataState.titleCategory1}   srcCategory1={dataState.srcCategory1}
                titleCategory2={dataState.titleCategory2}   srcCategory2={dataState.srcCategory2}
                titleCategory3={dataState.titleCategory3}   srcCategory3={dataState.srcCategory3}
                titleCategory4={dataState.titleCategory4}   srcCategory4={dataState.srcCategory4}
                titleCategory5={dataState.titleCategory5}   srcCategory5={dataState.srcCategory5}
                titleCategory6={dataState.titleCategory6}   srcCategory6={dataState.srcCategory6}
                titleCategory7={dataState.titleCategory7}   srcCategory7={dataState.srcCategory7}
            />
            <NewProductsShowcase toptext={dataState.toptext}/>
            <Testcomponent/>
        </div>
    )
}
export default Frontpage;