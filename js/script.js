
function openGoogleDriveApp(fileId) {
    // Tentativa de abrir o Google Drive usando uma URL que o Android pode reconhecer
    var driveUrl = 'https://drive.google.com/file/d/' + fileId + '/view';
    
    // Abre a URL
    window.location.href = driveUrl;
}

function redirectToPlayStore() {
    // Redireciona para a página do Google Drive na Play Store
    window.location.href = 'market://details?id=com.google.android.apps.docs';
}

function handleDownload(fileId) {
    // Verifica se o aplicativo Google Drive está instalado e tenta abrir usando a URL reconhecida
    openGoogleDriveApp(fileId);
    
    // Caso contrário, redireciona para a Play Store
    setTimeout(function() {
        redirectToPlayStore();
    }, 1000); // Redireciona para a Play Store após 1 segundo
}
