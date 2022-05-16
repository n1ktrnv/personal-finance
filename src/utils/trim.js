const trim = (text, max) =>
    text.length > max ? text.slice(0, max + 1) + '…' : text;

export {trim};
