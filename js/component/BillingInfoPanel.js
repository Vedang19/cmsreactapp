/**
 * Created by vedangm on 08/27/2015.
 */
'use strict';

var React = require('react');
var ReactBoot = require('react-bootstrap');
var Navbar = ReactBoot.Navbar;
var Nav = ReactBoot.Nav;
var NavItem = ReactBoot.NavItem;
var UpperHeader = require('./UpperHeader');
var Panel = ReactBoot.Panel;
var Button = ReactBoot.Button;
var Input = ReactBoot.Input;
var Grid = ReactBoot.Grid;
var Row = ReactBoot.Row;
var Col = ReactBoot.Col;

class BillingInfoPanel extends React.Component {

    constructor (){
        super();
    }

    cust () {
        alert('button Customer is clicked');
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={4} sm={4}>
                            <Panel collapsible defaultExpanded header='Billing Information' bsStyle='info'>

                                <table>
                                    <tr>
                                        <td><label>Freight Payment</label></td>
                                        <td>
                                            <select id="freightPayment" name="FreightPayment" >
                                                <option value="in.">in.</option>
                                                <option value="in">Cm</option>
                                            </select>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label>Billing Duty and Tax To</label></td>
                                        <td>
                                            <select id="BillingDuty" name="BillingDuty" >
                                                <option value="in.">Recipient</option>
                                                <option value="in">Recipient</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label>Account</label></td>
                                        <td><input type="text" /></td>
                                    </tr>
                                    <tr>
                                        <td colSpan="3">

                                            <Input type='checkbox' label='Split duty and Tax'/>
                                        </td>

                                    </tr>

                                </table>
                            </Panel>

                    </Col>
                </Row>
            </Grid>
        );

    }
}

module.exports = BillingInfoPanel;

