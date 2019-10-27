import css from 'styled-jsx/css'

export default css.footer`

footer {
    padding-bottom: 32px;
    width: 100%;
    background-color: var(--color-offwhite);
    float: left;
}

.footer-package {
    padding-top: 32px;
    padding-bottom: 32px;
    max-width: 1200px;
    margin: 0 auto;
}

.footer-top {
    border-bottom: 1px solid #DCDCDC;
    display: -webkit-flex;
    padding-bottom: 32px;
}

.footer-bottom {
    color: var(--color-heavygrey);
    font-weight: var(--font-weight-light);
    display: -webkit-flex;
}

.column {
    -webkit-flex-grow: 1;
    -webkit-flex-direction: column;
    display: -webkit-flex;
}

.column.left {
    margin-left: 32px;
    margin-right: 32px;
}

.column.center {
    margin-right: 32px;
}

.column.right {
    
}

.item-head{
    color: var(--color-black);
    margin-bottom: 24px;
}

.item {
    color: var(--color-heavygrey);
    font-weight: var(--font-weight-light);
    margin-bottom: 24px;
}

.pay-method{
    margin-right: 16px;

}

.copyright img{
    margin-right: 16px;
}

.footer-item{
    -webkit-flex-grow: 1;
    -webkit-align-items: center;
    display: -webkit-flex;
}  


`