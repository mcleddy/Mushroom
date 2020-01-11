import React, { Component } from 'react';
import { Header } from '../../../components';
import "./sleeping.css";
import App from '../../../App';

class Sleeping extends React.Component {
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Age in Months</th>
                            <br></br>
                            <br></br>
                            <th>Total Hours of Sleep</th>                     <br></br>
                            <th>Total Hours of Nighttime Sleep</th>
                            <br></br>
                            <th>Total Hours of Daytime Sleep</th>
                        </tr>
                    </thead>
                    <br></br>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <br></br>
                            <br></br>
                            <td>16</td>
                            <br></br>
                            <br></br>
                            <td>8-9</td>
                            <br></br>
                            <br></br>
                            <td>7-8</td>
                        </tr>
                        <br></br>
                        <tr>
                            <td>2</td>
                            <br></br>
                            <br></br>
                            <td>12</td>
                            <br></br>
                            <br></br>
                            <td>8-9</td>
                            <br></br>
                            <br></br>
                            <td>7-8</td>
                        </tr>
                        <br></br>
                        <tr>
                            <td>3</td>
                            <br></br>
                            <br></br>
                            <td>15</td>
                            <br></br>
                            <br></br>
                            <td>9-10</td>
                            <br></br>
                            <br></br>
                            <td>5-6</td>
                        </tr>
                        <br></br>
                        <tr>
                            <td>4</td>
                            <br></br>
                            <br></br>
                            <td>15</td>
                            <br></br>
                            <br></br>
                            <td>9-10</td>
                            <br></br>
                            <br></br>
                            <td>5-6</td>
                        </tr>
                        <br></br>
                        <tr>
                            <td>5</td>
                            <br></br>
                            <br></br>
                            <td>15</td>
                            <br></br>
                            <br></br>
                            <td>9-10</td>
                            <br></br>
                            <br></br>
                            <td>5-6</td>
                        </tr>
                        <br></br>
                        <tr colSpan="2">
                            <td>6</td>
                            <br></br>
                            <br></br>
                            <td>14</td>
                            <br></br>
                            <br></br>
                            <td>10</td>
                            <br></br>
                            <br></br>
                            <td>4</td>
                        </tr>
                        <br></br>
                        <tr>
                            <td>7</td>
                            <br></br>
                            <br></br>
                            <td>14</td>
                            <br></br>
                            <br></br>
                            <td>10</td>
                            <br></br>
                            <br></br>
                            <td>4</td>
                        </tr>
                        <br></br>
                        <tr>
                            <td>8</td>
                            <br></br>
                            <br></br>
                            <td>14</td>
                            <br></br>
                            <br></br>
                            <td>10-11</td>
                            <br></br>
                            <br></br>
                            <td>4-3</td>
                        </tr>
                        <br></br>
                        <tr>
                            <td>9</td>
                            <br></br>
                            <br></br>
                            <td>14</td>
                            <br></br>
                            <br></br>
                            <td>10-11</td>
                            <br></br>
                            <br></br>
                            <td>4-3</td>
                        </tr>
                        <br></br>
                        <tr>
                            <td>10</td>
                            <br></br>
                            <br></br>
                            <td>14</td>
                            <br></br>
                            <br></br>
                            <td>11</td>
                            <br></br>
                            <br></br>
                            <td>3</td>
                        </tr>
                        <br></br>
                        <tr>
                            <td>11</td>
                            <br></br>
                            <br></br>
                            <td>14</td>
                            <br></br>
                            <br></br>
                            <td>11</td>
                            <br></br>
                            <br></br>
                            <td>3</td>
                        </tr>
                        <br></br>
                        <tr>
                            <td>12</td>
                            <br></br>
                            <br></br>
                            <td>14</td>
                            <br></br>
                            <br></br>
                            <td>11</td>
                            <br></br>
                            <br></br>
                            <td>3</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        )
    }
}
export default Sleeping;