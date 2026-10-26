#!/usr/bin/env python3
"""
Nova E-Commerce - Database Initializer
Initializes the SQLite database using schema.sql and seed_data.sql.
"""

import os
import sqlite3
import sys

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DB_PATH = os.path.join(BASE_DIR, "ecommerce.db")
SCHEMA_PATH = os.path.join(BASE_DIR, "schema.sql")
SEED_PATH = os.path.join(BASE_DIR, "seed_data.sql")


def init_database(db_path=DB_PATH):
    print(f"Initializing database at: {db_path}")

    # Ensure parent directory exists
    os.makedirs(os.path.dirname(db_path), exist_ok=True)

    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

    # Enable foreign keys
    cursor.execute("PRAGMA foreign_keys = ON;")

    # Apply schema
    if os.path.exists(SCHEMA_PATH):
        with open(SCHEMA_PATH, "r", encoding="utf-8") as f:
            schema_sql = f.read()
        cursor.executescript(schema_sql)
        print("✓ Executed schema.sql successfully")
    else:
        print(f"✗ Error: {SCHEMA_PATH} not found", file=sys.stderr)
        return False

    # Apply seed data
    if os.path.exists(SEED_PATH):
        with open(SEED_PATH, "r", encoding="utf-8") as f:
            seed_sql = f.read()
        cursor.executescript(seed_sql)
        print("✓ Executed seed_data.sql successfully")
    else:
        print(f"✗ Warning: {SEED_PATH} not found", file=sys.stderr)

    conn.commit()

    # Verification
    cursor.execute("SELECT COUNT(*) FROM products;")
    product_count = cursor.fetchone()[0]
    cursor.execute("SELECT COUNT(*) FROM categories;")
    category_count = cursor.fetchone()[0]

    print(f"✓ Verification: {product_count} products across {category_count} categories loaded.")

    conn.close()
    return True


if __name__ == "__main__":
    success = init_database()
    sys.exit(0 if success else 1)
