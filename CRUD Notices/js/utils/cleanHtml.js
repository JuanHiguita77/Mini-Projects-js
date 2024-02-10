export function cleanHtml(container)
{
    if(!container.firstChild) return;
    
    while(container.firstChild)
    {
        container.removeChild(container.firstChild)
    }
}