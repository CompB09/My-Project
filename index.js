import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Container, Row, Col, Button} from 'reactstrap';
import { useTable } from "react-table";
import "react-table/react-table.css"

const logEntry = {
    "prop1":"[INFO ] 2020-07-09T08:49:21,611Z [Node thread-1] corda.flow. - No need to notarise this transaction. {actor_id=internalShell, actor_owning_identity=O=PartyA, L=London, C=GB, actor_store_id=NODE_CONFIG, fiber-id=10000001, flow-id=8ab75f57-0927-4e97-a867-404ffc85b820, invocation_id=d3cf42fd-9962-4af3-82a1-9a3f8a03e60d, invocation_timestamp=2020-07-09T08:49:15.305Z, origin=internalShell, session_id=71e2fe6f-3c90-43f5-b6de-1762d1216b95, session_timestamp=2020-07-09T08:49:14.963Z, thread-id=136, tx_id=347B67D3DBC1291894561C77394A596FEBC90CBB2286FE7858E6833FC8D84EE8}",
    "prop2":"[INFO ] 2020-07-09T08:49:21,611Z [Node thread-1] corda.flow. - Recording transaction locally. {actor_id=internalShell, actor_owning_identity=O=PartyA, L=London, C=GB, actor_store_id=NODE_CONFIG, fiber-id=10000001, flow-id=8ab75f57-0927-4e97-a867-404ffc85b820, invocation_id=d3cf42fd-9962-4af3-82a1-9a3f8a03e60d, invocation_timestamp=2020-07-09T08:49:15.305Z, origin=internalShell, session_id=71e2fe6f-3c90-43f5-b6de-1762d1216b95, session_timestamp=2020-07-09T08:49:14.963Z, thread-id=136, tx_id=347B67D3DBC1291894561C77394A596FEBC90CBB2286FE7858E6833FC8D84EE8}",
    "prop3":"[INFO ] 2020-07-09T08:49:21,691Z [Node thread-1] corda.flow. - Recorded transaction locally successfully. {actor_id=internalShell, actor_owning_identity=O=PartyA, L=London, C=GB, actor_store_id=NODE_CONFIG, fiber-id=10000001, flow-id=8ab75f57-0927-4e97-a867-404ffc85b820, invocation_id=d3cf42fd-9962-4af3-82a1-9a3f8a03e60d, invocation_timestamp=2020-07-09T08:49:15.305Z, origin=internalShell, session_id=71e2fe6f-3c90-43f5-b6de-1762d1216b95, session_timestamp=2020-07-09T08:49:14.963Z, thread-id=136, tx_id=347B67D3DBC1291894561C77394A596FEBC90CBB2286FE7858E6833FC8D84EE8}",
    "prop4":"[INFO ] 2020-07-09T08:49:21,762Z [Node thread-1] corda.flow. - Party O=PartyC, L=Lagos, C=NG received the transaction. {actor_id=internalShell, actor_owning_identity=O=PartyA, L=London, C=GB, actor_store_id=NODE_CONFIG, fiber-id=10000001, flow-id=8ab75f57-0927-4e97-a867-404ffc85b820, invocation_id=d3cf42fd-9962-4af3-82a1-9a3f8a03e60d, invocation_timestamp=2020-07-09T08:49:15.305Z, origin=internalShell, session_id=71e2fe6f-3c90-43f5-b6de-1762d1216b95, session_timestamp=2020-07-09T08:49:14.963Z, thread-id=136, tx_id=347B67D3DBC1291894561C77394A596FEBC90CBB2286FE7858E6833FC8D84EE8}",
    "prop5":"[INFO ] 2020-07-09T08:49:21,762Z [Node thread-1] corda.flow. - All parties received the transaction successfully. {actor_id=internalShell, actor_owning_identity=O=PartyA, L=London, C=GB, actor_store_id=NODE_CONFIG, fiber-id=10000001, flow-id=8ab75f57-0927-4e97-a867-404ffc85b820, invocation_id=d3cf42fd-9962-4af3-82a1-9a3f8a03e60d, invocation_timestamp=2020-07-09T08:49:15.305Z, origin=internalShell, session_id=71e2fe6f-3c90-43f5-b6de-1762d1216b95, session_timestamp=2020-07-09T08:49:14.963Z, thread-id=136, tx_id=347B67D3DBC1291894561C77394A596FEBC90CBB2286FE7858E6833FC8D84EE8}",
}
  
  ReactDOM.render(
      <YourComponent entry={logEntry} />,
      document.getElementById('root')
  );

class App extends Component {
    render() {
      return (
   
        <div class='some-page-wrapper'>
  <div class='row'>
    <div class='column'>
      <div class='column-one'>
        Some Text in Column One
      </div>
    </div>
    <div class='column'>
      <div class='column-two'>
        Some Text in Column Two
      </div>
    </div>
    <div class='column'>
      <div class='column-three'>
        Some Text in Column Three
      </div>
    </div>
  </div>
  <div class='row 2'>
    <div class='column'>
      <div class='column-four'>
        Some Text in Row 2, Column One
      </div>
    </div>
    <div class='column'>
      <div class='column-five'>
        Some Text in Row 2, Column Two
      </div>
    </div>
    <div class='column'>
      <div class='column-six'>
        Some Text in Row2, Column Three
      </div>
    </div>
  </div>
</div>

      );
    }
  }
  export default App;

  /// Table

  function createData(name, time, message) {
    return { name, time, message };
  }
  
  const rows = [
    createData('[INFO ] 2020-07-09T08:49:21,611Z [Node thread-1] corda.flow. - No need to notarise this transaction. {actor_id=internalShell, actor_owning_identity=O=PartyA, L=London, C=GB, actor_store_id=NODE_CONFIG, fiber-id=10000001, flow-id=8ab75f57-0927-4e97-a867-404ffc85b820, invocation_id=d3cf42fd-9962-4af3-82a1-9a3f8a03e60d, invocation_timestamp=2020-07-09T08:49:15.305Z, origin=internalShell, session_id=71e2fe6f-3c90-43f5-b6de-1762d1216b95, session_timestamp=2020-07-09T08:49:14.963Z, thread-id=136, tx_id=347B67D3DBC1291894561C77394A596FEBC90CBB2286FE7858E6833FC8D84EE8}', 15, 'NodeA' ),
    createData('[INFO ] 2020-07-09T08:49:21,611Z [Node thread-1] corda.flow. - No need to notarise this transaction. {actor_id=internalShell, actor_owning_identity=O=PartyA, L=London, C=GB, actor_store_id=NODE_CONFIG, fiber-id=10000001, flow-id=8ab75f57-0927-4e97-a867-404ffc85b820, invocation_id=d3cf42fd-9962-4af3-82a1-9a3f8a03e60d, invocation_timestamp=2020-07-09T08:49:15.305Z, origin=internalShell, session_id=71e2fe6f-3c90-43f5-b6de-1762d1216b95, session_timestamp=2020-07-09T08:49:14.963Z, thread-id=136, tx_id=347B67D3DBC1291894561C77394A596FEBC90CBB2286FE7858E6833FC8D84EE8}', 23, 'NodeB'),
    createData('[INFO ] 2020-07-09T08:49:21,611Z [Node thread-1] corda.flow. - No need to notarise this transaction. {actor_id=internalShell, actor_owning_identity=O=PartyA, L=London, C=GB, actor_store_id=NODE_CONFIG, fiber-id=10000001, flow-id=8ab75f57-0927-4e97-a867-404ffc85b820, invocation_id=d3cf42fd-9962-4af3-82a1-9a3f8a03e60d, invocation_timestamp=2020-07-09T08:49:15.305Z, origin=internalShell, session_id=71e2fe6f-3c90-43f5-b6de-1762d1216b95, session_timestamp=2020-07-09T08:49:14.963Z, thread-id=136, tx_id=347B67D3DBC1291894561C77394A596FEBC90CBB2286FE7858E6833FC8D84EE8}', 10, 'NodeC'),
    createData('[INFO ] 2020-07-09T08:49:21,611Z [Node thread-1] corda.flow. - No need to notarise this transaction. {actor_id=internalShell, actor_owning_identity=O=PartyA, L=London, C=GB, actor_store_id=NODE_CONFIG, fiber-id=10000001, flow-id=8ab75f57-0927-4e97-a867-404ffc85b820, invocation_id=d3cf42fd-9962-4af3-82a1-9a3f8a03e60d, invocation_timestamp=2020-07-09T08:49:15.305Z, origin=internalShell, session_id=71e2fe6f-3c90-43f5-b6de-1762d1216b95, session_timestamp=2020-07-09T08:49:14.963Z, thread-id=136, tx_id=347B67D3DBC1291894561C77394A596FEBC90CBB2286FE7858E6833FC8D84EE8}', 8, 'NodeD'),
  ];
  
  export default function SimpleTable() {
    const classes = useStyles();
  
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Flow Entries</TableCell>
              <TableCell align="right">Time</TableCell>
              <TableCell align="right">Message</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.time}</TableCell>
                <TableCell align="right">{row.message}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  
  
