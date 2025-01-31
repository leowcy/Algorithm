https://codesign.al/QSMq
Change Description (For Everyone)
Level 2 - Current level
Let’s extend our transaction model by adding a “parent ID” field. A parent ID points to another transaction in the mempool that must be mined in the same block, before the “child” transaction can be mined. If a transaction has no parent ID, it means its parent has been mined already.

In certain cases, a transaction may not be chosen by miners because of its low fee. A technique known as Child-Pays-For-Parent (CPFP) allows a “child” transaction to pay a higher transaction fee in order to incentivize a miner to select both itself and its parent transaction in the same block. In doing so, the miner can collect the sum of the fees. CPFP can be applied recursively to multiple transactions within the same block, but cycles are not possible.

Problem:

Extend the mine_block method to take into account CPFP incentives for the miner.
STRICTLY OPTIONAL: Implement a method min_fee(mempool, parent_id, child_size) -> uint64 which returns the fee that a child transaction of size child_size should pay to include itself and its parent in the next block.
[execution time limit] 4 seconds (py3)

[memory limit] 1 GB

Saved
8990919293949596979899100101102103104105106107108109
            cur_size = each_d["size"]
            if max_size - cur_size < 0:
                return ans
            
            # want to add check if parent tx is included inside the ans
            if (each_d.get("parentTransactionID") and each_d.get("parentTransactionID") in tx_id_set) or each_d.get("parentTransactionID") is None:
                # print(each_d)
                ans.append(each_d)

Output
Terminal
[{'transactionID': 'D', 'fee': 1000, 'size': 50}, {'transactionID': 'E', 'fee': 250, 'size': 25}, {'transactionID': 'B', 'fee': 120, 'size': 20}]
Free-format output
Joshua
David
Chengyao
values, ``` ``` , print(value, ..., sep=' ', end='\\n', file=sys.stdout, flush=False) Prints the values to a stream, or to sys.stdout by default. Optional keyword arguments: file:  a file-like object (stream); defaults to the current sys.stdout. sep:   string inserted between values, default a space. end:   string appended after the last value, default a newline. flush: whether to forcibly flush the stream., hint
