import MySQLdb

def create_session(mysql, username):
    cur = mysql.connection.cursor()
    try:
        cur.execute("""
            CREATE TABLE IF NOT EXISTS sessions (
                session_id INT AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(100),
                session_data TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        """)
        cur.execute("INSERT INTO sessions (username, session_data) VALUES (%s, %s)", (username, '{}'))
        mysql.connection.commit()
        session_id = cur.lastrowid
        return session_id
    finally:
        cur.close()

def get_session(mysql, session_id):
    cur = mysql.connection.cursor()
    try:
        cur.execute("SELECT * FROM sessions WHERE session_id = %s", (session_id,))
        session = cur.fetchone()
        return session
    finally:
        cur.close()

def delete_session(mysql, session_id):
    cur = mysql.connection.cursor()
    try:
        cur.execute("DELETE FROM sessions WHERE session_id = %s", (session_id,))
        mysql.connection.commit()
        return cur.rowcount > 0
    finally:
        cur.close()

def refresh_session(mysql, session_id):
    cur = mysql.connection.cursor()
    try:
        cur.execute("SELECT * FROM sessions WHERE session_id = %s", (session_id,))
        session = cur.fetchone()
        if session:
            cur.execute("INSERT INTO sessions (username, session_data) VALUES (%s, %s)", (session[1], session[2]))
            mysql.connection.commit()
            return cur.lastrowid  # Return new session ID
        else:
            return None
    finally:
        cur.close()

def clear_all_sessions(mysql):
    
    cur = mysql.connection.cursor()
    try:
        cur.execute("DELETE FROM sessions")
        mysql.connection.commit()
    finally:
        cur.close()
