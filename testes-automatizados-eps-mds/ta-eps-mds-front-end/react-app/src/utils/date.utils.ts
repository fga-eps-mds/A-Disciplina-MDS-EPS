export function formatDateTimeToBrazilian(date: Date | string) {
    return new Date(date).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });

    // const timePart = new Date(date).toLocaleTimeString("pt-BR", {
    //     hour: "2-digit",
    //     minute: "2-digit",
    //     second: "2-digit",
    // });
    //
    // return `${datePart} ${timePart}`;
}