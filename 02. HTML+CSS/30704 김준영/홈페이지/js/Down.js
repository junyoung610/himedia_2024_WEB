<button onclick="downloadFile()">Download Text File</button>

function downloadFile() {
    // 파일 내용을 생성합니다.
    const content = 'Hello, world! This is the content of the file.';

    // Blob 객체를 생성합니다.
    const blob = new Blob([content], { type: 'text/plain' });

    // URL.createObjectURL을 사용하여 Blob URL을 생성합니다.
    const url = URL.createObjectURL(blob);

    // <a> 태그를 생성하고 속성을 설정합니다.
    const a = document.createElement('a');
    a.href = url;
    a.download = 'example.txt'; // 다운로드될 파일의 이름을 지정합니다.

    // 생성한 <a> 태그를 클릭하여 다운로드를 시작합니다.
    document.body.appendChild(a);
    a.click();

    // 사용이 끝난 URL 객체를 해제합니다.
    URL.revokeObjectURL(url);

    // <a> 태그를 제거합니다.
    document.body.removeChild(a);
}
