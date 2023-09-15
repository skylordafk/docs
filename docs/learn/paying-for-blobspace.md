# Paying for blobspace

## PayForBlobs transactions

Users who want to publish data on Celestia do so by sending a
`PayForBlobs` transaction. A `PayForBlobs` transaction consists of the identity of the sender, the data to be made available, the data
size, the namespace ID and a signature.

Each `PayForBlobs` transaction is split into two parts: the “Blob”
which includes the data to be made available along with the
namespace, and the executable transaction which includes a
commitment to the data and an associated reserved namespace.

Both the blobs and executable transactions are put into the block
within the appropriate namespace. The block data is extended using
erasure coding and then merkelized into a data root commitment
included in the block header.

![Lifecycle of a `celestia-app` Transaction](../img/learn/tx-lifecycle.png)

To learn about the detailed lifecycle of a Celestia transaction, see
[here](../how-celestia-works/transaction-lifecycle)

## Fee market overview

Celestia uses a standard gas-price prioritised mempool. This means
that transactions with higher fees will be prioritized by validators. Fees are comprised of a flat fee per transaction and
then a variable fee based on the size of each blob in the
transaction.

For more information on how fees are calculated in Celestia, see
[our documentation on submitting PFB transactions](../../developers/submit-data).
