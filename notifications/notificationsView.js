export const createNotification = (message, type) => {
    return `
    <div class="notification ${type}"> 
    <p>${message} </p>
    </div>
    `
}