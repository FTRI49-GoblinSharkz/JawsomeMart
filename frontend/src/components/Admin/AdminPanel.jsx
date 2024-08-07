import styles from"./Admin.module.css"

function AdminPanel(){
    return (
        <div className={styles.adminPanel}>
            <div className="admin-header">Admin Header</div>
            <ul className={styles.adminPanelItems}>
                <li>List Item</li>
                <li>List Item</li>
                <li>List Item</li>
                <li>List Item</li>
                <li>List Item</li>
            </ul>
        </div>
    )
}

export default AdminPanel
