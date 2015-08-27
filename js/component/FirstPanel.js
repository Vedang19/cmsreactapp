/**
 * Created by vedangm on 08/26/2015.
 */

'use strict';

var React = require('react');
var ReactBoot = require('react-bootstrap');
var Button = ReactBoot.Button;
var Panel = ReactBoot.Panel;
var PanelInstance = require('./PanelInstance');
var ShipToInfoPanel = require('./ShipToInfoPanel');
var Grid = ReactBoot.Grid;
var Row = ReactBoot.Row;
var Col = ReactBoot.Col;

class FirstPanel extends React.Component {

    constructor() {
        super();


    }

    render() {


        return (
                 <div id="FirstUpperPanel" >

                     <Grid>
                     <Row>
                         <Col xs={4} sm={4}> <PanelInstance /></Col>
                         </Row>
                         <Row>
                             <Col xs={4} sm={4}> <ShipToInfoPanel /></Col>
                         </Row>
                     </Grid>


                   </div>

        );
    }

}

module.exports = FirstPanel;