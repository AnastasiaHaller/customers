import { Component } from "react";
import Customer from "./Customer";

import styles from "./Customers.module.css";

// const DUMMY_CUSTOMERS = [
//   { id: "c1", name: "Дмитрий" },
//   { id: "c2", name: "Михаил" },
//   { id: "c3", name: "Ирина" },
// ];

class Customers extends Component {

  constructor() {
    super();
    this.state = {
      showCustomers: true,
    };
  }

  componentDidUpdate() {
    if (this.props.customers.length === 0) {
      throw new Error('No customers!');
    }
  }

  toggleCustomersHandler() {
    this.setState((curState) => {
      return {showCustomers: !curState.showCustomers};
    });
  }

  render() {

    const customersList = (
      <ul>
        {this.props.customers.map((customer) => (
          <Customer key={customer.id} name={customer.name} />
        ))}
      </ul>
    );

    return (
      <div className={styles.customers}>
        <button onClick={this.toggleCustomersHandler.bind(this)}>
          {this.state.showCustomers ? "Show" : "Hide"} Customers
        </button>
        {this.state.showCustomers && customersList}
      </div>
    );
  }
}

// const Customers = () => {
//   const [showCustomers, setShowCustomers] = useState(true);

//   const toggleCustomersHandler = () => {
//     setShowCustomers((curState) => !curState);
//   };

//   const customersList = (
//     <ul>
//       {DUMMY_CUSTOMERS.map((customer) => (
//         <Customer key={customer.id} name={customer.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={styles.customers}>
//       <button onClick={toggleCustomersHandler}>
//         {showCustomers ? "Спрятать" : "Показать"} Заказчиков
//       </button>
//       {showCustomers && customersList}
//     </div>
//   );
// };

export default Customers;
