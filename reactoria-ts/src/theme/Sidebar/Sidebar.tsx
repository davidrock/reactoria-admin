import * as React from 'react';
import './Sidebar.css';

class Sidebar extends React.Component {
  public render() {
    return (
        <div className="sidebar-menu">
          <div className="sidebar-header">
            <div className="logo">
              <a href="index.html"><img src="assets/images/icon/logo.png" alt="logo" /></a>
            </div>
          </div>
          <div className="main-menu">
            <div className="slimScrollDiv" style={{position: 'relative', overflow: 'hidden', width: 'auto', height: 638}}><div className="menu-inner" style={{overflow: 'hidden', width: 'auto', height: 638}}>
                <nav>
                  <ul className="metismenu" id="menu">
                    <li className="active">
                      <a href="javascript:void(0)" aria-expanded="true"><i className="ti-dashboard" /><span>dashboard</span></a>
                      <ul className="collapse in">
                        <li className="active"><a href="index.html">ICO dashboard</a></li>
                        <li><a href="index2.html">Ecommerce dashboard</a></li>
                        <li><a href="index3.html">SEO dashboard</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0)" aria-expanded="true"><i className="ti-layout-sidebar-left" /><span>Sidebar
                          Types
                        </span></a>
                      <ul className="collapse">
                        <li><a href="index.html">Left Sidebar</a></li>
                        <li><a href="index3-horizontalmenu.html">Horizontal Sidebar</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0)" aria-expanded="true"><i className="ti-pie-chart" /><span>Charts</span></a>
                      <ul className="collapse">
                        <li><a href="barchart.html">bar chart</a></li>
                        <li><a href="linechart.html">line Chart</a></li>
                        <li><a href="piechart.html">pie chart</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0)" aria-expanded="true"><i className="ti-palette" /><span>UI Features</span></a>
                      <ul className="collapse">
                        <li><a href="accordion.html">Accordion</a></li>
                        <li><a href="alert.html">Alert</a></li>
                        <li><a href="badge.html">Badge</a></li>
                        <li><a href="button.html">Button</a></li>
                        <li><a href="button-group.html">Button Group</a></li>
                        <li><a href="cards.html">Cards</a></li>
                        <li><a href="dropdown.html">Dropdown</a></li>
                        <li><a href="list-group.html">List Group</a></li>
                        <li><a href="media-object.html">Media Object</a></li>
                        <li><a href="modal.html">Modal</a></li>
                        <li><a href="pagination.html">Pagination</a></li>
                        <li><a href="popovers.html">Popover</a></li>
                        <li><a href="progressbar.html">Progressbar</a></li>
                        <li><a href="tab.html">Tab</a></li>
                        <li><a href="typography.html">Typography</a></li>
                        <li><a href="form.html">Form</a></li>
                        <li><a href="grid.html">grid system</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0)" aria-expanded="true"><i className="ti-slice" /><span>icons</span></a>
                      <ul className="collapse">
                        <li><a href="fontawesome.html">fontawesome icons</a></li>
                        <li><a href="themify.html">themify icons</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0)" aria-expanded="true"><i className="fa fa-table" />
                        <span>Tables</span></a>
                      <ul className="collapse">
                        <li><a href="table-basic.html">basic table</a></li>
                        <li><a href="table-layout.html">table layout</a></li>
                        <li><a href="datatable.html">datatable</a></li>
                      </ul>
                    </li>
                    <li><a href="maps.html"><i className="ti-map-alt" /> <span>maps</span></a></li>
                    <li><a href="invoice.html"><i className="ti-receipt" /> <span>Invoice Summary</span></a></li>
                    <li>
                      <a href="javascript:void(0)" aria-expanded="true"><i className="ti-layers-alt" /> <span>Pages</span></a>
                      <ul className="collapse">
                        <li><a href="login.html">Login</a></li>
                        <li><a href="login2.html">Login 2</a></li>
                        <li><a href="login3.html">Login 3</a></li>
                        <li><a href="register.html">Register</a></li>
                        <li><a href="register2.html">Register 2</a></li>
                        <li><a href="register3.html">Register 3</a></li>
                        <li><a href="register4.html">Register 4</a></li>
                        <li><a href="screenlock.html">Lock Screen</a></li>
                        <li><a href="screenlock2.html">Lock Screen 2</a></li>
                        <li><a href="reset-pass.html">reset password</a></li>
                        <li><a href="pricing.html">Pricing</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0)" aria-expanded="true"><i className="fa fa-exclamation-triangle" />
                        <span>Error</span></a>
                      <ul className="collapse">
                        <li><a href="404.html">Error 404</a></li>
                        <li><a href="403.html">Error 403</a></li>
                        <li><a href="500.html">Error 500</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0)" aria-expanded="true"><i className="fa fa-align-left" /> <span>Multi
                          level menu</span></a>
                      <ul className="collapse">
                        <li><a href="#">Item level (1)</a></li>
                        <li><a href="#">Item level (1)</a></li>
                        <li><a href="#" aria-expanded="true">Item level (1)</a>
                          <ul className="collapse">
                            <li><a href="#">Item level (2)</a></li>
                            <li><a href="#">Item level (2)</a></li>
                            <li><a href="#">Item level (2)</a></li>
                          </ul>
                        </li>
                        <li><a href="#">Item level (1)</a></li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div><div className="slimScrollBar" style={{background: 'rgb(0, 0, 0)', width: 7, position: 'absolute', top: 0, opacity: '0.4', display: 'none', borderRadius: 7, zIndex: 99, right: 1, height: '593.359px'}} /><div className="slimScrollRail" style={{width: 7, height: '100%', position: 'absolute', top: 0, display: 'none', borderRadius: 7, background: 'rgb(51, 51, 51)', opacity: '0.2', zIndex: 90, right: 1}} /></div>
          </div>
        </div>        
      );
    }
  }

export default Sidebar;
