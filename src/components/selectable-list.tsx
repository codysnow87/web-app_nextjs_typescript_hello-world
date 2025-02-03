"use client";

import React, { useState, useEffect } from "react";

type Item = {
  id: number;
  name: string;
};

export default function SelectableList() {
  const [items, setItems] = useState<Item[]>([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("/api/resource", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(
            `API returned status ${response.status}: ${response.statusText}`
          );
        }

        const data: Item[] = await response.json();
        setItems(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  // Filter items based on the `filter` state
  const filteredItems = items.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  if (loading) {
    return <p>Loading items...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="">
      <p className="">My Items</p>
      <div>
        <label htmlFor="filterInput">Filter by name:</label>
        <input
          id="filterInput"
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Type a name..."
        />
      </div>

      <ul>
        {filteredItems.map(({ id, name }) => (
          <div className="messages-grid__option">
            <li key={id}>
              <div>ID: {id}</div>
              <div>Name: {name}</div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
