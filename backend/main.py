from fastapi import FastAPI, Body
from typing import  Dict
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def check_is_dag(nodes, edges):
    # Build adjacency list to know which nodes point to which
    adj = {node['id']: [] for node in nodes}
    for edge in edges:
        adj[edge['source']].append(edge['target'])
    
    visited = set()
    rec_stack = set()

    def has_cycle(v):
        visited.add(v)
        rec_stack.add(v)
        for neighbour in adj.get(v, []):
            if neighbour not in visited:
                if has_cycle(neighbour): return True
            elif neighbour in rec_stack:
                return True
        rec_stack.remove(v)
        return False

    for node in nodes:
        if node['id'] not in visited:
            if has_cycle(node['id']): return False # if cycle found, not a DAG
    return True

@app.post('/pipelines/parse')
async def parse_pipeline(pipeline: Dict = Body(...)):
    nodes = pipeline.get('nodes', [])
    edges = pipeline.get('edges', [])
    
    return {
        "num_nodes": len(nodes),
        "num_edges": len(edges),
        "is_dag": check_is_dag(nodes, edges)
    }