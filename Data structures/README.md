# What is a linked list?

Linked lists consists of nodes, in which one has a value and a pointer to another one or null. They don't have indexes, to access a specific node you have to go through every one until reach the desired one.

# Properties of linked lists

head -> Is the beginning
Tail -> Is the end of the list  
Length -> Amount of elements

# Singly linked list

The terminology came from the fact that each node is only connected one directionally to the next node.

Are good alternatives to arrays when you do insertion and deletion at the beginning.

# Doubly linked list

The difference with singly linked lists is that every node has another pointer to the previous node. This makes them more efficients than singly linked lists in operations which involves searching nodes.

# Stacks and Queues

Stacks are LIFO data structures. LIFO means that the last element added into the stack will be the first element to be removed.

Queues are FIFO data structures. Which means the first element added will be the first to be removed.

They both are good structures for insertion and removal of information, not so much for searching or access data

# Trees

Trees are data structures that consists of nodes in a parent / child relationship.

# Binary trees

Each parent node can have at most two children. Every node to the left of a parent node is always less thant the parent while every node to the right is always greater than the parent.

# Tree traversal

There's to main approches to traversing a tree, breath-first search (bfs) and depth-first search (dfs)

Breath-first search visit every node on the same level

Depth-first preorder search first hits the end of the tree and then check the rest of the nodes.

# Binary heaps

A binary heap is a category of binary trees. Is very similar to a binary search tree but with some different rules. For example in a max binary heap, parent nodes are always larger than child nodes, while in a min binary heap parent nodes are always smaller than child nodes. Heaps are used to implement priority queues

# Priority Queue

Is a data structure where each element has a priority. Elements with higher priorities are served before elements with lower priorities.
